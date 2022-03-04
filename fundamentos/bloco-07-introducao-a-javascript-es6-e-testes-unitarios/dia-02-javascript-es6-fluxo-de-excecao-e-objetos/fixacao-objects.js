const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryInfo = Object.values(order.order.delivery);
  const address = Object.values(order.address);
 
  console.log(`Olá ${deliveryInfo[0]}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${address[0]}, Nº ${address[1]}, AP: ${address[2]}`); 
  // console.log(deliveryInfo[0]);
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza);
  const drink = Object.keys(order.order.drinks);
  const price = Object.values(order.payment);

  let pedido = '';

  for (let i = 0; i < pizza.length; i += 1) {
    pedido += `${pizza[i]} `; 
  }
  for (let j = 0; j < drink.length; j += 1) {
    pedido += `${drink[j]} `;
  }
  console.log(`Olá ${order.name}, o total do seu pedido de ${pedido} é R$ ${price}`);
};

orderModifier(order);
