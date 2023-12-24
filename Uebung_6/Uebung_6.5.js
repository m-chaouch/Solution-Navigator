const deepCopy = (struct) => Array.isArray(struct) ? (struct.map((element) => deepCopy(element))) : Object.fromEntries(
    Object.entries(struct).map(([key, value]) => [key, deepCopy(value)])
  );

  // Object.fromEntries() : Umwandlung einer liste mit key value Paaren zu einem Objekt
  // Object.entries() : Gibt einen Array von den key value Paaren eines Objektes zurück (map also nutzbar)
