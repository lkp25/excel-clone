console.log('module wroking');

async function start (){
 return await Promise.resolve('async workin')
}
start().then(console.log)