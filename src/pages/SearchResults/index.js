import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";


export default function SearchResults({ params }) {
    const { keyword } = params
    return <ListOfGifs keyword={keyword} />
}