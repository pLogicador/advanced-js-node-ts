// Core-js e regenerator-runtime

function promise(){
    return new Promise((resolve, rejected) =>{
        setTimeout(()=>{
            console.log('Im promise!');
            resolve();
        }, 2000);
    });
}

export default async function () {
    await promise();
    console.log('Terminou!');
}
