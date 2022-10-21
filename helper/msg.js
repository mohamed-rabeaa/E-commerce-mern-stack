///////////default messages of all response for user////////////
module.exports = {

    /////////////user messages//////////////
    _user: {
        exist: 
       'sorry this email is alredy exist and verify',
        notVerfiy: 
       'sorry this email is alredy exist but not verfy please click on verify email',
        verifyEmail: 
        'an email sent to your account please verfiy it',
        invalidLink: 
        'sorry this link become invalid',
        signupAndVerify: 
        'signup and verfiy email is success',
        wrongEmail: 
        'sorry this email is not register before',

        passToken: 
        'we send password code to your email please enter it', 
        reset: 'reset password success',
        login: 'login is success',
        notFound: 
        'sorry is not found any user',
        deleteAdmin: 
        'cant delete admin',
        wrongPass: 
        'sorry this password not matched with email',
        removed: 'removed user successfly',
        imgAdd: 'an photo added successfly'
    },

    //////////////////category messages///////////////
    _cate: {
        exist: 'sorry this category already exist',
        create: 'create category successfly',
        notFound: 'sorry is not found any category', 
        update: 'update category is successfly',
        child: 'you cant delete this untile delete its child',
        removed: 'removed category successfly'
    },
    
    //////////////product messages///////////////
    _item: {
        notFound: 'sorry is not found any product',
        removed: 'removed item successfly',
        create: 'Create product successfly'
    },
    
    /////////////cart messages////////////////
    _cart: {
        notFound: 'sorry is not found any cart',
        removed: 'removed cart successfly',
        producRemoved: 'removed an product successfly',
        removedFaild: 'faild removed',
        increase: 'increase product quantity successfly',
        decrease: 'decrease product quantity successfly'
    },
    
    ///////////////validation messages//////////////////
    _valid: {
        firstNameRequired: 'first name should be writen',
        lastNameRequired: 'last name should be writen',
        emailInvalid: 'is not valid email',
        passInvalid: 'password should be more than 5 charecter', 
        confirmPass:'confirm password is required',
        passUnmatched: 'sorry password and confirm password is not matched', 
    },

    /////////////////auth messages//////////////////
    _auth: {
        authorization: 'sorry you not authorization now ya rabeaa',
        admin: 'sorry you not admin now ya rabeaa'
  }
};