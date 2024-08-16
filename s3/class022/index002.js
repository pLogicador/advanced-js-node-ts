/* Example:
- Imagine que você tem um usuário com certas permissões e deseja permitir o acesso a uma rota somente se 
o usuário estiver autenticado e tiver a permissão necessária. */

// Dados do usuário
const isAuthenticated = true; // O usuário está autenticado
const hasPermission = false; // O usuário não tem a permissão necessária

// Verificação usando AND (&&)
const canAccessRoute = isAuthenticated && hasPermission; 

console.log(canAccessRoute); // false: o usuário não pode acessar a rota porque não tem a permissão

// Verificação usando OR (||) para acesso público ou autenticado
const isPublicRoute = true; // A rota é pública
const canAccess = isPublicRoute || isAuthenticated;

console.log(canAccess); // true: o usuário pode acessar a rota porque ela é pública

// Verificação usando NOT (!) para negar o acesso de usuários bloqueados
const isBlocked = false; // O usuário não está bloqueado

if (!isBlocked) {
    console.log("User can access the system."); // Será exibido porque o usuário não está bloqueado
} else {
    console.log("Access denied.");
}
