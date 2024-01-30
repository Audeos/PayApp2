export type Bank = {
    id: string,
    name: string,
    image: {},
}

export const BANKS: Array<Bank> = [
    {id: "0", name: "İş Bankası",image: {uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/T%C3%BCrkiye_%C4%B0%C5%9F_Bankas%C4%B1_logo.svg/2560px-T%C3%BCrkiye_%C4%B0%C5%9F_Bankas%C4%B1_logo.svg.png"}},
    {id: "01", name: "QNB Finansbank",image: {uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Qatar_National_Bank_Logo.svg/2560px-Qatar_National_Bank_Logo.svg.png"}},
    {id: "02", name: "Akbank",image:{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Akbank_logo.svg/2560px-Akbank_logo.svg.png"}}
]
