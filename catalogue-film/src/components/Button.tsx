export type VarianteBouton = "primaire" | "secondaire" | "danger";

export interface BoutonProps {
  libelle: string;
  variante?: VarianteBouton;  
  desactive?: boolean;         
  onClick?: () => void;
}

export default function Bouton({libelle, variante = "primaire", desactive, onClick}: BoutonProps){

    const colors: Record<VarianteBouton, string> = {
        primaire: "bg-green-500",
        secondaire: "bg-yellow-400",
        danger: "bg-red-500"
    }



    return(
        <>
            <button className={`${colors[variante]}`} disabled={desactive} onClick={onClick}>{libelle}</button>
        </>
    );
}