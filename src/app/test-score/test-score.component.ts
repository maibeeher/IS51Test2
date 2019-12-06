import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

export interface Testscore {
  id: string;
  testName: string;
  pointsPossible: number;
  pointsReceived: number;
  percentage: number;
  grade: number;
}
@Component({
  selector: 'app-test-score',
  templateUrl: './test-score.component.html',
  styleUrls: ['./test-score.component.css']
})
export class TestScoreComponent implements OnInit {

  tests: Array<Testscore> = [];
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
  }

  async loadTestFromJSON() {
    const tests = await this.http.get('assets/tests.json').toPromise();
    return tests.json();
  }

addTest() {
  const test: Testscore = {
    id: null,
    testName: null,
    pointsPossible: null,
    pointsReceived: null,
    percentage: null,
    grade: null

  };
  this.tests.unshift(test);
  this.saveToLocalStorage();
}

  deleteTests(index: number) {
    this.tests.splice(index, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('Tests', JSON.stringify(this.tests));
    this.toastService.showToast('success', 5000, 'Success! Items saved!');

  }

  search(paramas: string) {
    this.tests = this.tests.filter((contact: Testscore) => {
    });
  }


}
