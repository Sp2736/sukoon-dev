#!/bin/bash

QUALITY=85

find . -type f \( -iname "*.png" \) | while read -r file; do
    output="${file%.*}.webp"

    # Skip if webp already exists
    if [ -f "$output" ]; then
        echo "Skipping existing: $output"
        continue
    fi

    echo "Converting: $file -> $output"

    cwebp -q $QUALITY "$file" -o "$output"

    # Uncomment below if you want to remove original PNGs
    # rm "$file"
done

echo "Done converting PNGs to WebP."
