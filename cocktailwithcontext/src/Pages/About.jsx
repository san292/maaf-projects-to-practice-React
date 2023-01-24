import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Card className="my-3 bg-light border-white" style={{ width: '70rem' }}>
        <Card.Body>
          <Card.Title> Le vin serait une « oeuvre du diable » </Card.Title>
          <p>
            Hier soir, vous avez commandé mojito sur mojito, puis une petite
            virgin colada (une piña colada sans alcool) pour changer et un
            daïquiri pour la forme (l’abus d’alcool est dangereux pour la
            santé). Vous buvez des cocktails, mais que savez vous vraiment d’eux
            ? Pas grand chose, non ? Voici de quoi vous donner des sujets de
            conversation en soirée… À l’origine, le cocktail n’est pas une
            tradition américaine. Le concept nous vient tout droit de
            l’Angleterre des 17 et 18 siècles. À cette époque, la consommation
            d’eau pouvait s’avérer périlleuse : choléra, dysenterie, typhoïde…
            La solution : boire de l’alcool fort mélangé à des concentrés
            aromatiques. Les premiers cocktails étaient donc vendus en
            pharmacie. Le premier bouquin de recettes de cocktail date de la fin
            du 19 siècle : The Bon Vivant’s Companion. L’auteur est un certain
            Jerry Thomas, père spirituel du barman moderne. Parmi ses créations
            : The Blue Blazer et le Tom et Jerry.
          </p>
          <p>
            La culture du cocktail doit beaucoup à la Prohibition américaine.
            Dans les années 1920, les seuls alcools disponibles proviennent de
            la contrebande. Et sont souvent de mauvaise qualité. Le fait d’y
            ajouter une autre boisson, et donc de faire un cocktail, permettait
            de mieux faire passer la pilule ! Des recettes classiques de
            cocktail nous sont venues d’ailleurs : ainsi, le daïquiri est né à
            la fin du 19 siècle à Santiago de Cuba, contribution d’un ingénieur
            américain en poste dans les Caraïbes. Et la margarita vient tout
            droit du Mexique de la fin des années 1940. L’écrivain américain
            Ernest Hemingway vouait une passion au cocktail. Parmi ses «
            créations », le « Death in the Afternoon », à base de champagne et
            d’absinthe. Gin, whisky et rhum. Voilà les alcools utilisés dans les
            cocktails jusque dans les années 1970. La vodka a détrôné le gin
            dans les années 1980.…{' '}
          </p>
        </Card.Body>
      </Card>
      <Link to="/">Go to the home page</Link>
    </div>
  );
};

export default About;
