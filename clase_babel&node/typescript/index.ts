const listaArray:Array<number> =[2,3,5,7]

listaArray
.map((x:number): number => x*x)
.forEach((x:number) => console.log(x))


const generateRadom = ():number => Math.round(Math.random() * 225)

