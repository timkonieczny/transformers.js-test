// This file (model.js) contains all the logic for loading the model and running predictions.

class MyClassificationPipeline {
    // NOTE: Replace this with your own task and model
    static task = 'text-classification';
    static model = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            // Dynamically import the Transformers.js library
            let { pipeline, env } = await import('@xenova/transformers')

            // Specify a custom location for models (defaults to '/models/').
            // env.localModelPath = '/path/to/models/'

            // Disable the loading of remote models from the Hugging Face Hub:
            // env.allowRemoteModels = false

            // NOTE: Uncomment this to change the cache directory
            // env.cacheDir = './.cache';

            // this.instance = pipeline(this.task, this.model, { progress_callback })
            this.instance = await pipeline(this.task, this.model, { progress_callback })
        }

        return this.instance
    }
}

// The run function is used by the `transformers:run` event handler.
async function run(event, text) {
    // const classifier = await MyClassificationPipeline.getInstance(console.log)
    const classifier = await MyClassificationPipeline.getInstance()
    return await classifier(text)
}

module.exports = {
    run
}
