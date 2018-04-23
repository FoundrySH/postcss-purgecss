const fs = require('fs')
const postcss = require('postcss')

import purgecss from './../src/'

describe('Purgecss postcss plugin', () => {
    const files = ['simple']

    for (const file of files) {
        it(`remove unused css successfully: ${file}`, done => {
            const input = fs
                .readFileSync(`${__dirname}/fixtures/src/${file}/${file}.css`)
                .toString()
            const expected = fs
                .readFileSync(`${__dirname}/fixtures/expected/${file}.css`)
                .toString()
            postcss([
                purgecss({
                    content: [`${__dirname}/fixtures/src/${file}/${file}.html`]
                })
            ])
                .process(input)
                .then(result => {
                    expect(result.css).toBe(expected)
                    expect(result.warnings().length).toBe(0)
                    done()
                })
        })
    }
})
