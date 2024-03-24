// Реализация собственного класса Промис

const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
}

class MyPromise {
    #thenCbs = []
    #catchCb = undefined
    #state = STATE.PENDING
    #value

    #runCallbacks() { // реализовать через reduce
        if (this.#state === STATE.FULFILLED) {
            // this.#thenCbs.forEach(callback => {
            //     this.#value = callback(this.#value)
            // })
            this.#value = this.#thenCbs.reduce((acc, callback) => {
                return callback(acc)
            }, this.#value)

            this.#thenCbs = []
        }

        if (this.#state === STATE.REJECTED) {
            this.#value = this.#catchCb(this.#value);
            this.#catchCb = undefined
        }
    }

    constructor(cb) {
        cb(this.#resolve, this.#reject)
    }

    #resolve = value => {
        queueMicrotask(() => {
            if (this.#state !== STATE.PENDING) return
            this.#value = value
            this.#state = STATE.FULFILLED
            this.#runCallbacks()
        })
    }

    #reject = value => {
        queueMicrotask(() => {
            if (this.#state !== STATE.PENDING) return
            this.#value = value
            this.#state = STATE.REJECTED
            this.#runCallbacks()
        })
    }

    then(thenCb) {
        this.#thenCbs.push(thenCb)
        return this
    }

    catch(cb) {
        if (!this.#catchCb)
            this.#catchCb = cb
        return this
    }
}

new MyPromise((resolve, reject) => {
    resolve(500)
})
    .then(res => res += 5)
    .then(x => {
        console.log(x)
        x += 10
        return x
    })
    .then(res => {
        console.log(res)
    })
    .catch(x => console.log(x))
