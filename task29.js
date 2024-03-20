// Реализация собственного класса Промис

const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
}

class MyPromise {
    #thenCbs = []
    #catchCbs = []
    #state = STATE.PENDING
    #value
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this)

    #runCallbacks() {
        if (this.#state === STATE.FULFILLED) {
            this.#thenCbs.forEach(callback => {
                callback(this.#value)
            })

            this.#thenCbs = []
        }

        if (this.#state === STATE.REJECTED) {
            console.log("re")
            this.#catchCbs.forEach(callback => {
                callback(this.#value)
            })

            this.#catchCbs = []
        }
    }

    constructor(cb) {
        try {
            cb(this.#onSuccessBind, this.#onFailBind)
        } catch (e) {
            this.#onFail(e)
        }
    }

    #onSuccess(value) {
        queueMicrotask(() => {
            if (this.#state !== STATE.PENDING) return

            if (value instanceof MyPromise) {
                value.then(this.#onSuccessBind, this.#onFailBind)
                return
            }

            this.#value = value
            this.#state = STATE.FULFILLED
            this.#runCallbacks()
        })
    }
    #onFail(value) {
        queueMicrotask(() => {
            if (this.#state !== STATE.PENDING) return

            if (value instanceof MyPromise) {
                value.then(this.#onSuccessBind, this.#onFailBind)
                return
            }

            if (this.#catchCbs.length === 0) {
                throw new UncaughtPromiseError(value)
            }

            this.#value = value
            this.#state = STATE.REJECTED
            this.#runCallbacks()
        })
    }

    then(thenCb, catchCb) {
        return new MyPromise((resolve, reject) => {
            this.#thenCbs.push(result => {
                if (thenCb == null) {
                    resolve(result)
                    return
                }

                try {
                    resolve(thenCb(result))
                } catch (error) {
                    reject(error)
                }
            })

            this.#catchCbs.push(result => {
                if (catchCb == null) {
                    reject(result)
                    return
                }

                try {
                    resolve(catchCb(result))
                } catch (error) {
                    reject(error)
                }
            })

            this.#runCallbacks()
        })
    }

    catch(cb) {
        return this.then(undefined, cb)
    }


}

new MyPromise((resolve, reject) => {
    resolve(500)
}).then(res => res += 5).then(x => {
    console.log(x)
    x += 10
    return x
}).then(res => {
    console.log(res)
}).catch(e=>console.log(e))
