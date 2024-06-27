import { Hono } from "hono";
import { ResObject } from "../types";

const test = new Hono();

// Test 01
test.get("/01", (c) => {

    // ໃຫ້ເຮັດຂໍ້ມູນຂອງຊື້ຄົນເປັນຊື່ເຕັມ ຕົວຢ່າງຜົນອອກ: "Foo Boo" ແລ້ວເກັບໃສ່ Array ໃຫມ່
    // ຂໍ້ມູນຫຼັກ

    const PeopleData = [
        {
            fristName: "Foo",
            lastName: "BOO",
        },
        {
            fristName: "Bar",
            lastName: "BEE",
        },
        {
            fristName: "Baz",
            lastName: "ZEE",
        },
        {
            fristName: "Fur",
            lastName: "LEY",
        },
    ];


    let result = 'Here'

    return c.json(
        result
    );
});

export { test };
