const idValidationSchema = {
    id:{
        in:['params'],
        exists:{
            errorMessage:'id is required'
        },
        notEmpty:{errorMessage:'id cannot be empty'},
        isLength:{options:{min:3},errorMessage:'id should be min 3 character long'},
        trim: true
    }
}

module.exports = idValidationSchema