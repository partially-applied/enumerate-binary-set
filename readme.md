

For a  given integer<sub>10</sub> *x* , it generates the range of integers<sub>2</sub> up to *x*.

To view it in another way, it lists the binary number line up to a given value ( in base 10 ).

**Quick Guide in Code**

```livescript

enumerate = require "@partially-applied/enumerate-binary-set"

enumerate 1 # [ [ 0 ] ]

enumerate 2 # [ [ 0 ] , [ 1 ] ]

enumerate 3 # [ [ 0 ], [ 1 ], [ 1, 0 ] ]


# Use of padding to normalize array length

# maintain a minimum length of 2 
enumerate 3,2 # [ [ 0, 0 ], [ 0, 1 ], [ 1, 0 ] ]

# maintain a minimum length of 3
enumerate 3,3 # [ [ 0, 0, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ] ]

```



`type signature`

`
:: (range,padding) -> [[Int,..Int]..[Int,..Int]]
`

**API**

- `range` 
    - should be a base 10 value
    - should be an integer
    - first argument provides the number of values you want to enumerate from 0.

- `padding`
    - padding is a helper argument that adds zeros to the start of the value in case its shorter then the padding value
    





    
    







