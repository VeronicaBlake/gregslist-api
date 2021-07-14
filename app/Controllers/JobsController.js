import { ProxyState } from "../AppState"


function _draw(){
    let template = ''
    ProxyState.jobs.forEach( job => {template += job.Template} )
    document.getElementById('jobs').innerHTML = template
}

export default class JobsController{
    constructor(){
        ProxyState.on('jobs', _draw)
        _draw()
    }
    
    createJob(){
        event.preventDefault()
        let form = event.target()
        let rawJob = {
            jobType: form.job.jobType,
            price: form.job.price, 
            imageUrl: form.job.imageUrl
        }
        jobsService.createJob(rawJob)
        form.reset()
    }
}