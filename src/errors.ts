/**
 * Contains information about an error that may have occurred due to user error.
 * Signals that only the message should be displayed rather than the default error traceback.
 */
export class ScriptError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'ScriptError'
    }
}
