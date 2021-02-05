import {Injectable} from "@angular/core";
import {ISession} from "../shared";

@Injectable()
export class VoterService{

  addVoter(session: ISession, userName: string) {
    session.voters.push(userName);
  }

  deleteVoter(session: ISession, userName: string) {
    session.voters = session.voters.filter(voter => voter != userName);
  }

  userHasVoted(session: ISession, userName: string) {
    return session.voters.some(voter => voter === userName);
  }
}
