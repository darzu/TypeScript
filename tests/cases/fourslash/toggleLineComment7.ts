// Common comment line cases.

//@Filename: file.tsx
//// const a = <MyContainer>
////     [|<MyFirstComponent />
////     <MySecondComponent />|]
//// </MyContainer>;
//// const b = <MyContainer>
////     {/*<MyF[|irstComponent />*/}
////     {/*<MySec|]ondComponent />*/}
//// </MyContainer>;
//// const c = <MyContainer>[|
////     <MyFirstComponent />
////     <MySecondCompo|]nent />
//// </MyContainer>;

verify.toggleLineComment(
    `const a = <MyContainer>
    {/*<MyFirstComponent />*/}
    {/*<MySecondComponent />*/}
</MyContainer>;
const b = <MyContainer>
    <MyFirstComponent />
    <MySecondComponent />
</MyContainer>;
//const c = <MyContainer>
//    <MyFirstComponent />
//    <MySecondComponent />
</MyContainer>;`);