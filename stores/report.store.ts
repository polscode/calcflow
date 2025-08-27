import { create } from "zustand"

// ==== Tipos ====
type Discount = {
  id: string
  type: string
  amounts: number[]
}

export type CashUnit = {
  id: number
  denomination: number
  quantity: number
}

type Report = {
  totalPlanilla: number
  // totalDiscounts: number
  discounts: Discount[]
  cash: CashUnit[]
}

type ReportStore = {
  userId: number | null
  report: Report

  setUserId: (id: number) => void
  updateTotalPlanilla: (amount: number) => void
  updateDiscount: (index: number, newAmounts: number[]) => void
  updateCashQuantity: (unitId: number, newQuantity: number) => void
  getDiscountTotalByIndex: (index: number) => number
  getTotalPlanilla: () => number
  getTotalDiscount: () => number
  getTotalCash: () => number
  getTotalBills: () => number;
  getTotalCoins: () => number;
  getDifference: () => number;
  buildPayload: () => { userId: number | null; report: Report }
}

// ==== Inicialización del store ====
export const useReportStore = create<ReportStore>()((set, get) => ({
  userId: null,

  report: {
    totalPlanilla: 0,
    // totalDiscounts: 0,
    discounts: [
      { id: "ANULADO", type: "Anulados", amounts: [] },
      { id: "DESCUENTO", type: "Notas de crédito", amounts: [] },
      { id: "CREDITO", type: "Créditos", amounts: [] },
      { id: "TRANSFERENCIA", type: "Transferencias", amounts: [] },
      { id: "EFECTIVO", type: "Efectivo", amounts: [] },
      { id: "PARQUEO", type: "Parqueos", amounts: [] },
      { id: "OTROS", type: "Otros", amounts: [] }
    ],
    cash: [
      { id: 0, denomination: 200, quantity: 0 },
      { id: 1, denomination: 100, quantity: 0 },
      { id: 2, denomination: 50, quantity: 0 },
      { id: 3, denomination: 20, quantity: 0 },
      { id: 4, denomination: 10, quantity: 0 },
      { id: 5, denomination: 5, quantity: 0 },
      { id: 6, denomination: 2, quantity: 0 },
      { id: 7, denomination: 1, quantity: 0 },
      { id: 8, denomination: 0.5, quantity: 0 },
      { id: 9, denomination: 0.2, quantity: 0 },
      { id: 10, denomination: 0.1, quantity: 0 },
    ],
  },

  setUserId: (id) => set({ userId: id }),

  updateTotalPlanilla: (amount) =>
    set((state) => ({
      report: { ...state.report, totalPlanilla: amount }
    })),

  updateDiscount: (index, newAmounts) =>
    set((state) => {
      const updatedDiscounts = [...state.report.discounts]
      if (updatedDiscounts[index]) {
        updatedDiscounts[index] = {
          ...updatedDiscounts[index],
          amounts: newAmounts,
        }
      }
      return { report: { ...state.report, discounts: updatedDiscounts } }
    }),

  updateCashQuantity: (unitId, newQuantity) =>
    set((state) => ({
      report: {
        ...state.report,
        cash: state.report.cash.map((unit) =>
          unit.id === unitId ? { ...unit, quantity: newQuantity } : unit
        ),
      },
    })),

  getTotalPlanilla: () =>
    get().report.totalPlanilla,

  getTotalDiscount: () =>
    get().report.discounts.reduce(
      (total, discount) =>
        total + discount.amounts.reduce((sum, amount) => sum + amount, 0),
      0
    ),

  getDiscountTotalByIndex: (index: number) => {
    const { report } = get()
    const discount = report.discounts[index]
    if (!discount) return 0
    return discount.amounts.reduce((acc, val) => acc + val, 0)
  },

  getTotalCash: () =>
    get().report.cash.reduce(
      (total, unit) => total + unit.denomination * unit.quantity,
      0
    ),

  getTotalBills: () =>
    get().report.cash
      .slice(0, 5)
      .reduce(
        (total, { denomination, quantity }) => total + denomination * quantity,
        0
      ),

  getTotalCoins: () =>
    get().report.cash
      .slice(5)
      .reduce(
        (total, { denomination, quantity }) => total + denomination * quantity,
        0
      ),

  getDifference: () => {
    const totalCash = get().getTotalCash()
    const totalDiscounts = get().getTotalDiscount()
    const totalPlanilla = get().getTotalPlanilla()
    return totalCash + totalDiscounts - totalPlanilla
  },


  // ==== Construcción del payload final ====
  buildPayload: () => ({
    userId: get().userId,
    report: get().report,
  }),
}))
