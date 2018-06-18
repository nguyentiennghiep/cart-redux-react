//import * as types from './../constants/index';
var initialState = [
    {
        id: 1,
        name: 'Iphone',
        img: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72", description: 'Made by apple',
        price: 500,
        inventory: 10,
        rate : 5
    },
    {
        id: 2,
        name: 'Sam Sung',
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8NDRAPDw8NEA4NDQ0NDw8NDQ0NFREWFhURFRUYHSggGBolGxUVITEiJSkrLy4uFx8zPTMsNygtMSsBCgoKDg0OFRAQFy0dFh0rLSsrNysrLSstKystLS0rNy0tLS0tLSsrLS0vKy4rKy0tLS0rLSstKy0rLSstLSstN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBQQGCAf/xABJEAACAQIBBAwKBwYGAwAAAAAAAQIDBBEFBhIhExQiMTVhcXKRsbKzBxY0QVFTdMHR0hUlMlJUgZQjYoSSk6EkJjM2QnNDosL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEBQL/xAAmEQEAAQQCAgICAgMAAAAAAAAAAQIDERMEEhRRMTIhM0GhBSIj/9oADAMBAAIRAxEAPwD3EAACO5rRpwnUnqjTjKcn6IxWL6jwrObPq/rKV1SrVKNB1JUqNOlOVLUvPjHBvlbf5bx7LnTJqwvWt9Wtzh/Skc+Zcilkmww/5Trt8esDHWe9957i5fHtqv8AEVZ633r7j9VX+JrKHoDZVnpffiLn9VX+IqzyvvxFx+qr/Ma2h6A2LxyvvxFx+pr/ADB45X34i4/VV/mNeADYfHK+/EXH6mv8wjzzvvxFx+pr/Ma+NkB6Vm3G5uMmXWVru7u5RWy06Fvtis6TUHg3JOW63XV0+Z1ct18Xg4JYvUqdP4Hr+bNHZM1oU8cNPbKxSxw/b1GeW1M34Jtac+iJdbsV3IzTCqu9RR8ywPpm41bqOve3EPgEsr3CeDlH+SHwM1ZAh9+fREd4vw9ZPoRb4d31/avyrftX/TNx96P8kPgCyzcffj/JD4Fh4vw9ZPoiL4vQ9ZPoiR4d30nyrXth/SN36Y/y0RlTKtzHDSlFY725pvqM/wAXIffl0RBZuw9ZPoiPCu+keXa9q5ZYuHgtKOvV9iHwJK+Urqm9GUop7+qEH52vRxMzvFyHrJ9ERZZuxet1ajfpaTZPhXfX9nl2vavqZUuoqMpOKU1jF6FPWugYstXH3o/06b9xZ+LcPWT6Ii+LUPWT6Ijwrvr+zy7XtvvgirVrhVpU6sqVejhOChuaNX9ypBamnvelb57VY3Cq0qdVLBVIRmk99YrHBnkvgdySrepVam5accMJJLDA9RyC/wDDUeb72Z66JonrV8r6K4rjMfCwAAPD0AAAAAACqzs4PvvZbnupHP2X+CMm8c7jrOgM7OD772W57qRz9l9/U+TOfcdoDUkPQxGTZ0Nkno+ZJyk/RFLWBGh6MfbnojHDzYpbwu3n92PQgMgDH28/ux6EG3X92PQgMgbIz77JV3QoUruvRjChX2J06m4lqqQ04vR5usr5upGDnPY1+1qUVFQxcnD7UuJERMT8D2TMxf5bo86576oaLVhumb3mQ8c26D9Mrni/81Q02rDdPlOtwfpLmc2cVQxVAdoE6gOVM3MPZjqmKqZkqmPVMlHZi7EKqZlqmOVMZRlibEKqRlqmOVMZRlh7EKqRmqkKqROTLcPBvHCcuR9TN7yB5LR5vvZpfg/hhKXI+o3TIHktHm+9nE5n7Zdrh/qhYAAGVqAAAAAABU52cH33slz3Ujn3L/A+S+fc9o6Czt4PvvZLnupHPmX+B8lc+57QGqIssiP9pP8A6a3ZK1GRaVtCWLxwlGUJaOGloyTWK41qf5AVtFx/5Y+bew/PfEk1i8N7zErsnjgmmvM1hrX5tC7Sfp7PzE5/AZT0fPjvrewe5x17/ENbJdpP09n5g2lL09n5hkXWWq9xKxtlUup1aWFNRt5KKjRwptQ1+fc44GDlN7j+KvX/AO6MerGrKEabacYYYLcp6lgljiRTp1XFqpg0nUnuakYtOWt4PWR+P4TL3HMP/bVDnXPfVDVJw1s3rNunGOQ4RhFRipVsIxSSW7l6DTpw1s6nB+kuTzvvDGjAkVMlUB6ibssCFQHqBMoD1AjKEKpjlTJ1AcoDKECpj1TJ1AeoDIxlTHKmZKgOUCMjZsxo4SlyPqNtyB5LR5vvZrGZkcJS5H1Gz5A8lo833s5HKn/pLt8P9ULAAAzNYAAAAAAKnO3g++9kue6kc9Zf4HyTz7rtHQudnB997Jc91I55zg4GyTz7rtAash6I0PTAehyGIcmA4BMQxAUjq7z5H1D8RlTefIwPeM2NeQ6fOq9uRqk462bVme8chUnx1e3I1ycNbOjw6sUy5fNjNcIFEeoEsYD1A192HqiUR6iSKA9QI7p6I1EeokigPjEjudEaiPUB6iPUR2OhigOUCRRHKJHZPRsWaKwb5H1GxZA8lo833soM1VrfI+ov8geS0eb72czkTmuXX4kYtwsAAClpAAAAAABUZ3zSydfN6ltW4XTTaOec4eB8kc+67R0Bn0/qy+9nq9Rz/nHwPkjn3XaA1ZDkMQ5APQ5DMSx06S0HuHowljFRxxlorDHV6cdT4wMICxpToJ69B4VJNYxxxg3glvb2Dx/IjpypaNPHQ1PdLDFtYS1vVyenzAYQye8+RllTnRTalob8NejitUFj5t5vExrmUNjho6OlucUlhJbndYvlA9szEqKeQKMlvN1l0VJr3FROnrZZ+Db/AG9Q59z31Qxpw1s1Wa8QxcmjtUxlTHKBOqY9Uy7Yz6kCgOUCdQHKmRsNSFRHKJMoCqBOw1olEVRJtAVQHdGtGojlElUBygO6da7zYWt8j6i8zdkna0cPutfmpNPqKfNyOt8j6iyzU8jpa8d1W9Hrp6jHdnNTfYjFC3AAK1wAAAAAAKXPWlp5Nvo44f4atLHf+zByw/sc+ZycD5H5912jofO3g6+9kue6kc7ZycD5H5112gNWTHIjQ5APHJjMRUwH4hiNxDEB2IyT1PkFxGz3nyMD33wexSyFRSWCxq6lz5Y/3IJQ1syPBy08h0cNe6q7299uQsoaye+FdVGZY6gKoE6gPUBsRrQKAugZCgOUCNhrY6gKoGRoC6BOw1MdQFUCfQFUCdhqQqA5QJlAcoDYalpkFYY8j6ixzYp6NpRWOOKnPew+1UlLD++Bg5GWGlyPqLHN7yShzPeyJnKymMQsQACEgAAAAAAqc7OD772S57qRzrnLwNkbnXXaOis7OD772S57qRzrnNwNkbnXfaA1RMcmRocmA9McMTFTAcAgAKIwEbA978FHANDn3HfTM+UNZg+CNY5Co8+476ZcOnrM16vErbdOWMoCqBkqAugU7FnRjqA5QJ1AcokbDox9AXQMjQDQG06MfQF0CfQHKBO06IFAXRJ9ANAbTozMlL7XI+ozs3fJKHMXWzFyetUua+oyc3PJKHMXWzXaqzTlRXGJWQABY8gAAAAAAqc7OD772S57qRzrnPwNkXnXfaOis7eD772S57qRznnPwNkXnXfaA1NDkMxHJgPQoxMVMB4DcQxAcIxMRGwOgfBBwHR59fvpl84lF4HuA6HPr99M2NxOdy6sVNVj4QqA5QJVAXRMndci0BdEl0RdEjuItEXRJVENEdxFoi6JLohokdxHohokuiLojsJrNapc2XUTZueSUOYhlstzLmy6h+bnklD/AK11nW4s5oY7v2WQABoVgAAAAAAqc7uDr72S57qRzlnQ/qbInOu+0dG53cHX/slz3UjnDOngbInLd9oDU0x2IzEMQJExcSPEXEB+IYjcQxAdiI2JiI2B0B4KL2lQyFbSrTVOEqlwtOWqMXss99+YqcveFi2pYxsqM6805LTrfsaKw86X2pdCMbN9f5Wof9lx3tQ8nuI7qWtdJ5njUXJ7VLKa5iMQ9kyD4V7SrHC+pytprfnT0q1F6/Qt0v7m518v2FN6NS8tYScVU0Z16cZaDjpJ4N+dNP8AM5hk2no8SCLx86S8++U1/wCPomfxOFkXnUeRsrW15CVS1qKrCE3Tk0mt0uJ+b0MzqjjFaU2orFLGTSWLaSWPG2l+Zz7mTnZPJladSMNmp1I6FSm5OCevFSTwete83jLfhEsb2hGjo1qE43NpW0auMYThTrRnJOpTeMNSesx3ODXTViIzS97HpugGgVNvnfkqeChfWvEpVYwlguKWslzXqVZwuHWk5vbd1Kk3r/w0qjlRXEtBrU97e8xlm1VEZmMJ7rHQF0SbRE0SvEp7ItEXRJcAwJwZOorcy5H1CZueSUOYutklNapcj6hmbvklDme9nX4n62W59liAAangAAAAAAFTndwdf+yXPdSObs6X9TZE5bvtnSOdvB1/7Jdd1I5szpf1NkT+L7aA1NMVMjxFxAkTFxI8RcQH4hiMxDEB+IjY3EMQPdMyLGVxm5a0oLFzq11xLGtU1viNNyhmNc0nJzpPRWL0o7pYek9K8EUsMgWz47jv6hdSrma9ya7U4iPwvtURVH5eIW+aVWpNQhTbk1io4YN6seouF4MrnBSwh9hTwxwaejjocvmPVVOOOkktJrBywWk16MR+zFFXOu/xC3VS8wyN4NHVaddypU91i08Z460sFyl1U8F1nCKanXqycoLBy0YpNpN6tZu2zC7MU18q9VPzh6i3TDW14NMk+qqvlrzZLkjMTJtCUpq20ZRnJU5qrVjJw8z3MkX+zBs5VN27PzVKetIhkyhHeVT+vcP/AOyanb04vGOnivTVqy65EOzBsxTPb2nrDP2XjfSGy8b6TB2YNmPOJTiFxayxUuRjs3vJaHM97MXJk8ceRmXm/wCS0eb72dnh/rY732WAABqVAAAAAAAqc7uDr/2S67qRzTnQ/qfIv8X20dK53cHX/sl13UjmfOZ/VGReS77aA1TEXEZiLiA/EMRmIuID8QxGYhiA/ETEbiI2B0d4KJYZv2vLcd/UM2VbWVvgwlhm7avjuO/qCSuNZnu2u05XW68Qs1WF2YqlcDlcFXjrNi12YNmKvbA5XBHjmxZ7MLspV7YF2wR45sWeyhspW7YFVwPHNiy2UFVK5XAu2CPHTsbRkSWLfIyyyB5LR5vvZSZt1cZP8+ou8geS0eb72a7VPWnDPXOZWAABa8AAAAAAAqM7+Dr/ANkuu6kcyZyP6pyNyXfbR03nfwdf+yXXdSOYc4n9VZIXFddtAasKIAC4hiIADsQxGgA7EQTEAOh/B1LDNu1fHcd9UKudzrZnZiywzZtXx3HfVDV6lzrZotUdoVV14lc7ZHbZKNXIu2S3S8bV4rkXbJSK54xVdEaTau1ci7ZKVXPGKrkaYNq62yKrkpdsjlck6U7VyrkcrkptsCq5I1G16DmdVxm/z6jaMgeS0eb72aTmDV0pvkfUbtkHyajzfezNcjFWFtNWYysAADw9AAAAAAAqM7+Dr/2S67qRy9nC/qzJPJddtHUOd/B1/wCyXXdSOXcvr6syTyXXbQGsiiAAoCAAoCAAoCAB77mdLDNi2fHc99UNEq3Gtm75qPDNa25bnvqh5vWq7p8pv4sf6sl/7LBXAu2CrVUXZjVhTlaq5F2yVWzC7MMGVqrkcrkqdnFVYYMrfbIquSo2cXZxhGVwrkVXJT7OOVwRgy9U8GlXSqPkfUz0PIHk1Hm+9nl/gnqY1XyPqZ6hkHyajzfezncj7ttn6rAAAoWgAAAAAAqc7Y45PvkvPaXXdSOXM4JJ5MySl5ldJ8W7R1rc0Y1ITpz1xqRlCS9MZLB9Zzrnn4Ob+itgo0p1aNOrUq0ZwhOpHQkta3CbW8tTS/PfA8uA2BZm3zeiqUnL7qp13Lo0CZ5h5S/D1v6Nf5QNZA2XxFyj+Grf0K/yh4i5R/DV/wChX+UDWgNlWYuUXvW1f9PW+UXxDyl+FuP09b5QNZA2TxGyj+Gr/p6/yirMXKP4av8Ap6/ygep5stLNOlN47hXEtXn/AG9RHktW+i29T6Eel5tVK9rka4yTlC3uKDjsk6FadGoqDU3jo6bWCeljq39Z5jUyVcYvCm3r31Km/eWUXaqPxDxVbpq+Rt2PH/YNurj6ECyRc+pl0w+IfQ916mfTD4lnk1vOmku3lx9CDb0f3uhDfoi59TLph8Q+ibn1MumHxI8m4aaT9vLj6EG3o/vdC+Iz6JufVS6YfEPom59TLph8R5Nw00pNvx9EuhfEPpCPol0IZ9EXPqZdMPiH0Pdepn0w+JPk3DTSk+kI+iXQg+kI+iXQviRvI116mfTD4ifRNz6qX80PiPJuGmh6z4E7hVatXDHcRx14a29R67kHyajzfezxjwQuVts8YwlUuayUKNKGEkv35yWqMVvtnt1hb7FSp0scdjhGGl95pYNlNdU1TmXummKYxDIAAPL0AAABiAAACAAFAAAAAAAAAAAAAZX+xLmy6jy3LP8AqS5QADBj9l8qEiIADwACQMAAAYABAdS8/IbNYf6UOQAA2TN7/Tlzi1AAAEKAAAAB/9k=",
        description: 'Made by Sam Sung',
        price: 200,
        inventory: 5,
        rate : 4
    },
    {
        id: 3,
        name: 'Oppo',
        img: "https://cdn.didongthongminh.vn/upload_images/2017/10/oppo-f1-gold.png",
        description: 'Made by China',
        price: 400,
        inventory: 10,
        rate : 1
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;