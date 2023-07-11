const toNumber  = (value : number | string) : number  => {
  switch ( typeof value ) {
    case "number": return value
    case "string": return Number(value)
    default : throw "Value deve ser um número ou uma string"
  }
}

console.log(toNumber(100))
