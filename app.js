const colors = require('colors')
const { inquirerMenu, pausa } = require('./helpers/inquirer')

const main = async () => {
  let opt = ''

  do {
    opt = await inquirerMenu()
    console.log(opt)
    if (opt !== '0') await pausa()
  } while (opt !== '0')
  //   pausa()
}

main()
