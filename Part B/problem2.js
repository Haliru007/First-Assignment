function diffObjects(oldObj, newObj) {
  // Create the result we need
  const result = {
    added: {},
    removed: {},
    changed: {}
  };

  // Get the keys and store them in Sets
  const oldKeys = new Set(Object.keys(oldObj));
  const newKeys = new Set(Object.keys(newObj));

  // Find what was added
  for (const key of newKeys) {
    if (!oldKeys.has(key)) {
      result.added[key] = newObj[key];
    }
  }

  // Find what was removed
  for (const key of oldKeys) {
    if (!newKeys.has(key)) {
      result.removed[key] = oldObj[key];
    }
  }

  // Find what changed
  for (const key of oldKeys) {
    if (newKeys.has(key) && oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  return result;
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
));
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }