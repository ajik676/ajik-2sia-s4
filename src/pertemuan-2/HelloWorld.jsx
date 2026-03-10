export default function HelloWorld(){
        const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div>
            <img src="./img/gambar2.jpg" alt="beruang" width={190}/>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>

                <UserCard 
	            nama="Ajik" 
	            nim="2457301091"
	            tanggal={new Date().toLocaleDateString()}
	          />
             <UserCard {...propsUserCard}/>
            <GreetingsBinjai/>
            <QuoteText/>
        </div>
    )
}


function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function GreetingsBinjai(){
    return(
        <small>Salam dari binjai</small>
    )
    }

   function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
} 
