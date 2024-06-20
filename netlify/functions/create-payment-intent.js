require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
console.log('MARKER 1000');
console.log(process.env.VITE_PUBLISHABLE_KEY)
export const handler = async(event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount, 
      currency: "usd",
      payment_method_types: ["card"]
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent })
    }
  }
  catch(error) {
    console.log(error)

    return {
      staus: 400,
      body: JSON.stringify({ error })
    }
  }
}
