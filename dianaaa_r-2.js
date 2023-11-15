let Vector = function (components) {
    this.components = components
    this.add = function(user_vector) {

        if (this.components.length !== user_vector.components.length) {
            throw new Error("The vectors have to be the same length!");
        }

        let result = [];
        for (let i = 0; i < this.components.length; i++) {

            let item = this.components[i] + user_vector.components[i]
            result.push(item)
        }
        return new Vector(result)
    }

    this.subtract = function(user_vector) {
        if (this.components.length !== user_vector.components.length) {
            throw new Error("The vectors have to be the same length!");
        }

        if (this.components.length === user_vector.components.length) {
            let result = [];
            for (let i = 0; i < this.components.length; i++) {

                let item = this.components[i] - user_vector.components[i]
                result.push(item)
            }
            return new Vector(result)
        }
    }
    this.dot = function(user_vector) {
        if (this.components.length !== user_vector.components.length) {
            throw new Error("The vectors have to be the same length!");
        }

        if (this.components.length === user_vector.components.length) {
            let sum = 0
            for (let i = 0; i < this.components.length; i++) {

                let item = this.components[i] * user_vector.components[i]
                sum += item
            }
            return sum
        }
    }
    this.norm = function(user_vector) {
        let sum = 0

        for (let i = 0; i < this.components.length; i++) {

            let item = (this.components[i]) ** 2
            sum += item

        }
        let result = sum ** 0.5
        return result
    }
    this.toString = function() {
        return `(${this.components.join(',')})`;
    };

    this.equals = function(user_vector) {
        if(this.components.length !== user_vector.components.length) {
            return false
        }

        for(let i = 0; i < this.components.length; i++) {
            if (this.components[i] !== user_vector.components[i]) {
                return false
            }
        }
        return true

    }

};