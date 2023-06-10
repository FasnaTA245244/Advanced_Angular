describe('first-test',()=>{
    let data:any;
    let a: number;
    let b: number;
    let str: string;

    function factorial(n:number){
        let fact=1;
        for(let i=1;i<=n;i++){
            fact=fact*i;
        }
        return fact;
    }

    let arr: number[] = [];
    arr.push(10);
    arr.push(15);
    arr.push(5);
    arr.push(22);
    arr.sort((a,b)=> a-b);
    function locate(num:number,arr:number[]){
        let j=0;
        let loc=0;
        arr.forEach((i)=>{
            
            if(num===i){
                loc=j;
            }
            j++;
        
        })
        return loc;
    }

    beforeEach(()=>{
        console.log('from before');
        data={};

        
    });
    // it('x test',()=>{});
    // it('fail test',()=>{
    //     fail();
    // });
    // it('dummy test',()=>{});

    it('it should add(10,10) and give 20',()=>{
        a=10;
        b=10;
        expect(a+b).toBe(20);
    });

    it('it should subtract(30,10) and give 10',()=>{
        a=30;
        b=10;
        expect(a-b).toBe(20);
    });

    it('it should multiply(5,6) and give 30',()=>{
        a=5;
        b=6;
        expect(a*b).toBe(30);
    });

    it('it should divide(50,2) and give 25',()=>{
        a=50;
        b=2;
        expect(a/b).toBe(25);
    });
    it('it should square(4) and give 16',()=>{
        a=4;
        expect(a*a).toBe(16);
    });

    it('it should return true if flag is true',()=>{
        data.flag = false;
        data.flag = true;

        expect(data.flag).toBe(true);
    });

    it('factorial of a number',()=>
    {
        expect(factorial(2)).toBe(2);
        
    });

    it('locating a number',()=>{
        expect(locate(5,arr)).toBe(0);
    });
        
});