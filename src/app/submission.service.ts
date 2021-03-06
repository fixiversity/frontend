import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class SubmissionService {
  constructor(private db: AngularFirestore) {}
  getIssuesRef() {
    const collection = this.db.collection("issues");
    return collection.ref;
  }

  async getID() {
    // TODO: Replace this with a guarded / server-side function
    const lastID = await this.getIssuesRef()
      .orderBy("id", "desc")
      .limit(1)
      .get()
      .then(snapshot => {
        return snapshot.docs[0].data().id;
      });
    return lastID + 1;
  }

  updateIssues(data: Object) {
    this.db.collection("issues").add(data);
    console.log("Submitting:", data);
  }
}
