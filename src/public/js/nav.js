window.addEventListener('load', ()=>{
    try {
        document.getElementById('go-to-home').addEventListener('click', ()=>{
            window.location.assign('/')
        })
    } catch (error) {
        console.log('No hay home')    
    }

    try {
        document.getElementById('go-to-clasificacion').addEventListener('click', ()=>{
            window.location.assign('/clasificacion')
        })
    } catch (error) {
        console.log('No hay clasificacion')    
    }

    try {
        document.getElementById('go-to-calendar').addEventListener('click', ()=>{
            window.location.assign('/calendar')
        })
    } catch (error) {
        console.log('No hay calendar')    
    }

    
    
})