import { loadStripe } from "@stripe/stripe-js";



// const STRIPE_PUBLISHABLE_KEY='pk_test_51PTnyGGcswsjIflh2dpChVUkLbBMwMys1ABbH6TTYZLUGUh9jtPXrx1HDczoUmhDDTUC4TYtKV8K5g2rX0TNE4O900dOxoU2HP'

// eslint-disable-next-line no-undef
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)