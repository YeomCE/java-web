import React from 'react'

interface DateProps {
    placeholder: string;
}

function DateInputGroup({ placeholder }: DateProps) {
    return (
        <div className="flex-1">
            <input
                className="input-middle-style"
                type="number"
                placeholder={placeholder}
            />
        </div>
    );
}


// -----------------------


function MonthSelectGroup() {
    //# TypeScript에서 배열 선언 및 초기화는 []로 가능
    const months: number[] = [];
    for (let i = 1; i <= 12; i++) {
        months.push(i); // months의 배열에 1씩 추가하며 삽입
    }
    return (
        <div className="flex-1">
            {/* select */}
            <select className="input-middle-style">
                <option>월</option>
                {months.map((month) => (
                    <option>{month}</option>
                ))};
            </select>
        </div>
    );
}

//! 함수형 컴포넌트의 첫글자는 필수로 대문자여야 한다.

export default function BirthInputGroup() {
    return (
        <div className="content">
            <div className="input-label">생년월일</div>
            <div className="flex">
                {/* style의 display 요소를 inline으로 적용해서 inline 형식으로 변경 */}
                <DateInputGroup placeholder="년(4자리)" />


                <MonthSelectGroup />


                <DateInputGroup placeholder="일" />
            </div>
        </div>
    )
}
