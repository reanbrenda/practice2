import React, { useState } from 'react';
import { Skeleton } from '@nextui-org/react';
import Head from 'next/head';

const CocktailsPage: React.FC<{ cocktails: any[] }> = ({ cocktails: initialCocktails }) => {
    const [cocktails, setCocktails] = useState(initialCocktails);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filteredCocktails = initialCocktails.filter(cocktail =>
            cocktail.strDrink.toLowerCase().includes(query)
        );
        setCocktails(filteredCocktails);
    };

    return (
        <div>
            <Head>
                <title>Cocktails</title>
            </Head>
            <h1>Cocktails</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search cocktails..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div className="cocktail-list">
                {cocktails.map(cocktail => (
                    <div key={cocktail.idDrink} className="cocktail-item">
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <div className="cocktail-details">
                            <h2>{cocktail.strDrink}</h2>
                            <p>{cocktail.strInstructions}</p>
                        </div>
                    </div>
                ))}
                {/* Display Skeletons for loading */}
                {Array.from({ length: 10 - (cocktails.length % 3) }, (_, i) => (
                    <div key={`skeleton-${i}`} className="cocktail-item">
                        <Skeleton height="200px" />
                    </div>
                ))}
            </div>
            <style jsx>{`
                .search-container {
                    margin-bottom: 20px;
                }
                .search-container input {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                .cocktail-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: flex-start;
                }
                .cocktail-item {
                    width: calc(33.33% - 20px);
                    margin-bottom: 20px;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease-in-out;
                }
                .cocktail-item:hover {
                    transform: translateY(-5px);
                }
                .cocktail-item img {
                    width: 100%;
                    height: auto;
                }
                .cocktail-details {
                    padding: 10px;
                    background-color: #f0f0f0;
                }
            `}</style>
        </div>
    );
};

export async function getStaticProps() {
    const API_KEY = '1';
    const numCocktails = 24; 
    const promises = Array.from({ length: numCocktails }, async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/${API_KEY}/random.php`);
        const data = await response.json();
        return data.drinks[0];
    });
    const cocktails = await Promise.all(promises);

    return {
        props: {
            cocktails,
        },
    };
}

export default CocktailsPage;
