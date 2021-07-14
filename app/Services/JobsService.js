import { ProxyState } from "../AppState.js"
import Jobs from "../Models/Jobs.js"

class JobsService{
    createJobs(rawJob){
        ProxyState.houses = [...ProxyState.jobs, new Job(rawJob)]
    }
}

export const jobsService = new JobsService()