console.log('Hello world');


class People {
    _skill

    constructor({name, age}){
        this.name = name
        this.age = age
    }

    getSkill(){
        return this._skill
    }

    setSkill(skill){
        if(!this._skill){
            this._skill = []
        }
        this._skill.push(skill)
    }
}

console.log(new People({ name: 'Viavacos', age: 18 }));