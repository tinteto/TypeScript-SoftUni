type carBody = {
material: string,
state: string,
}

type tyres = {
airPressure: number,
condition: string,
}

type engine = {
horsepower: number,
oilDensity: number,
}

type diagnostics = {
partName: string,
runDiagnostics: () => string,
}



function carDiagnostics (
    carBody: carBody & diagnostics,
    tyres: tyres & diagnostics,
    engine: engine & diagnostics,
) {

}


carDiagnostics({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics () { return this.partName} },

{ airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics () { return this.partName} },

{ horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics () { return this.partName} })