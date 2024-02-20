import {faUserGroup} from "@fortawesome/free-solid-svg-icons"
import {faCreditCard} from "@fortawesome/free-regular-svg-icons"
import {faMoneyBillTransfer} from "@fortawesome/free-solid-svg-icons"
import {faDollarSign} from "@fortawesome/free-solid-svg-icons"

export const LINKS_NAV =[
    {
        name: "Accounts",
        href: "/",
        icon: faUserGroup
    },
    {
        name: "Cards",
        href: "/cards",
        icon: faCreditCard
    },
    {
        name: "Transaction",
        href: `/transaction`,
        icon: faMoneyBillTransfer
    },
    {
        name: "Loan",
        href: "/loan",
        icon: faDollarSign
    }
]
