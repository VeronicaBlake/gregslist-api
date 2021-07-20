import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _draw(){
    let template = ''
    ProxyState.jobs.forEach( job => {
        template += job.Template
    })
    document.getElementById('jobs').innerHTML = template
}

export default class JobsController{
    constructor(){
        ProxyState.on('jobs', _draw)
        _draw()
    }
    
    createJob(){
        event.preventDefault()
        let form = event.target
        let rawJob = {
            jobType: form.jobType.value,
            price: form.price.value, 
            imgurl: form.imgurl.value
        }
        jobsService.createJob(rawJob)
        form.reset()
    }
}