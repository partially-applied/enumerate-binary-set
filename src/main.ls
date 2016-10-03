
dec-to-bin = require '@partially-applied/decimal-to-binary'


main = (height,width = 1) ->

	list = []

	for I from 0 til height

		bin = dec-to-bin I

		if bin.length < width

			for I from 0 til (width - bin.length)
				bin.unshift 0

		list.push bin

	list


module.exports = main