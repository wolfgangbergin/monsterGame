
//arrow functions leave the best keyword Alone
class User1 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.name} logedin!`);
    return this;
  }
  logout() {
    console.log(`${this.name} logedout!`);
    return this;
  }
  addScore() {
    this.score++;
    console.log(`the score is ${this.score}!`);
    return this;
  }
  subScore = () => {
    this.score--;
    console.log(`the score is ${this.score}!`);
    return this;
  };
}

class User2 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }
  login = wolfman.login;
  logout = wolfman.logout;
  addScore = wolfman.addScore;
  subScore = wolfman.subScore;
}


var wolfman = new User1('wolfman', 'wolfman@gmial.com');
var kim = new User2('kim22', 'kim@gmial.com');

console.log(
  kim.login().logout().addScore().addScore().addScore().subScore().subScore()
);

export function jobob(...props) {}
