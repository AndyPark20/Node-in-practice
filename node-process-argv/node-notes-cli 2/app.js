const read = require('./read')
const make = require('./create')
const revise = require('./update')
const remove = require('./delete')

const input = process.argv[2];
const entryInput = process.argv[3];
const updateIndex = process.argv[4];

if (input.toUpperCase() === 'READ') {
    read.list();
}else if (input.toUpperCase() === 'CREATE') {
  make.brandNew(entryInput)
}else if (input.toUpperCase() === 'UPDATE') {
  revise.revise(entryInput, updateIndex)
}else if (input.toUpperCase() === 'REMOVE') {
  remove.delete(entryInput)
}
