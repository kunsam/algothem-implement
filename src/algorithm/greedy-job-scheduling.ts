






export interface IJobData{
  id: string;
  deadline: number;
  profit: number;
}

export default class JobScheduling {

  public static get(jobs: IJobData[]) {
    // sort according to decreasing order of profit
    const sortByProfitJobs = jobs.sort((a, b) => b.profit - a.profit);
    const slot = new Array(jobs.length);
    const result = new Array(jobs.length);
    for (let i = jobs.length - 1; i >= 0; i--) {
      result[i] = '-';
    }
    // Initialise all slots to free
    for (let i = 0; i < jobs.length; i++) {
      slot[i] = 0;
    }
    // Iterate through all the given jobs
    for (let i = 0; i < jobs.length; i++) {
      /*
        Start from the last possible slot.Find a slot for the job
      */
      const deadline = sortByProfitJobs[i].deadline;
      for (let j = Math.min(jobs.length, deadline) - 1; j >= 0; j--) {
        if (slot[j] === 0) {
          result[j] = sortByProfitJobs[i].id;
          slot[j] = 1;
          break;
        }
      }
    }
    return result;
  }

  public static test() {
    const jobs: IJobData[] = [
      { id: 'a', deadline: 2, profit: 100 },
      { id: 'b', deadline: 1, profit: 19 },
      { id: 'c', deadline: 2, profit: 27 },
      { id: 'd', deadline: 1, profit: 25 },
      { id: 'e', deadline: 3, profit: 15 },
    ]
    const result = JobScheduling.get(jobs);
    console.log(result, 'results')
  }

  public static wiki() {

  }
}






