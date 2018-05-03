
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input() name;
  @Output() onVoted = new EventEmitter<boolean>();
  private voted :boolean = false;

  constructor() { }

  ngOnInit() {
  }
  vote(agreed :boolean){
    this.onVoted.emit(agreed);
    this.voted = true;
  }

}
