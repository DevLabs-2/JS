const cuentas = [
    {
        nombre: 'Martin Portnoy',
        cbu: 2345,
        saldo: 10
    },
    {
        nombre: 'Santiago Ferrara',
        cbu: 2346,
        saldo: 20
    },
    {
        nombre: 'Julián Lifschitz',
        cbu: 7,
        saldo: 847321
    },
    {
        nombre: 'Luca Listingart',
        cbu: 985,
        saldo: 9
    },
    {
        nombre: 'Mariana Maekanehisa',
        cbu: 1,
        saldo: 5939720
    }
];
for(let i = 0; i < 2; i++){
    let saldoTotal = 0;
    for(const cuenta of cuentas){
        saldoTotal += cuenta.saldo;
    }
    console.log(`El promedio de saldo es: ${saldoTotal/cuentas.length}`)
    
    const MayorDiez = cuentas.filter(cuenta => cuenta.saldo > 10000)
    console.log(`Los cbus de la gente con +10,000 en su cuenta son:`)
    for(const cuenta of MayorDiez){
        console.log(cuenta.cbu)
    }
    
    let cbu = prompt("Buscar cuenta por CBU")
    for(const cuenta of cuentas){
        if(cbu == cuenta.cbu){
            for(const propiedad in cuenta){
                console.log(cuenta[propiedad])
            }
        }
    }
    let i = 0;
    
    let cbuDel = prompt("Eliminar cuenta por CBU")
    for(const cuenta of cuentas){
        if(cbuDel == cuenta.cbu){
           cuentas.splice(i,1)
        }
        console.log(`Eliminada cuenta ${cbuDel}`)
        i++;
    }
    
}