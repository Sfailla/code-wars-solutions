const buyerOptions = [
  {
    title: 'Home',
    link: '/ReactClient',
    // icon: HomeIcon
  },
  {
    title: 'Create Order',
    link: '/ReactClient/CreateNewOrder',
    // icon: CreateOrderIcon
  },
  {
    title: 'Cart',
    link: '/ReactClient/Cart',
    // icon: CartIcon,
    badgeCount: 'cartCount',
  },
  {
    title: 'Orders',
    // icon: OrdersIcon,
    dropdownItems: [
      {
        title: 'Open Orders',
        link: '/ReactClient/OpenOrders',
        // icon: FolderIcon
      },
      {
        title: 'Pending Orders',
        link: '/ReactClient/PendingOrders',
        // icon: HourglassIcon
      },
      {
        title: 'Delivered Orders',
        link: '/ReactClient/DeliveredOrders',
        // icon: TruckIcon
      },
    ],
  },
]

function formatList(options) {
  const formattedList = []

  options.forEach(option => {
    !option.dropdownItems
      ? formattedList.push(option)
      : option.dropdownItems.forEach(option => formattedList.push(option))
  })

  return formattedList
}

console.log(formatList(buyerOptions))
