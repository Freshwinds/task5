/**
 * Created by freshwinds on 17-7-14.
 */
describe('fizzBuzzWhizzz', () => {
    let a=3;
    let b=5;
    let c=7;
    it("the number includes 3,print Fizz",()=>{
       let number=13;
        let actual_reslut="Fizz";
        expect(fizzBuzzWHizz(number,a,b,c)).toEqual(actual_reslut);

    });
    it("the number is the times of 3,print Fizz",() => {
          let number=3;
          let actual_reslut="Fizz";
          expect(fizzBuzzWHizz(number,a,b,c)).toEqual(actual_reslut);
    });
    it("the number is the times of 5,print Buzz",() => {
        let number=5;
        let actual_reslut="Buzz";
        expect(fizzBuzzWHizz(number,a,b,c)).toEqual(actual_reslut);
    })
    it("the number is the times of 7,print Fizz",() => {
        let number=7;
        let actual_reslut="Whizz";
        expect(fizzBuzzWHizz(number,a,b,c)).toEqual(actual_reslut);
    });
    it("the number is the times of 3&&5,print FizzBuzz",() => {
        let number=15;
        let actual_reslut="FizzBuzz";
        expect(fizzBuzzWHizz(number,a,b,c)).toEqual(actual_reslut);
    });
    it("the number is the times of 3&&7,print FizzWhizz",() => {
        let number=21;
        let actual_reslut="FizzWhizz";
        expect(fizzBuzzWHizz(number,a,b,c)).toEqual(actual_reslut);
    });
    it("the number is the times of 5&&7,print BuzzWhizz",() => {
        let number=70;
        let actual_reslut="BuzzWhizz";
        expect(fizzBuzzWHizz(number,a,b,c)).toEqual(actual_reslut);
    });
    it("the number is the times of 3&&5&&7,print Fizz",() => {
        let number=105;
        let actual_reslut="FizzBuzzWhizz";
        expect(fizzBuzzWHizz(number,a,b,c)).toEqual(actual_reslut);
    });
    it("the number is none of the times of 3or5or7,print number",()=>{
        let number=11;
        let actural_reslut=11;
        expect(fizzBuzzWHizz(number,a,b,c)).toEqual(actural_reslut);
    })

});
