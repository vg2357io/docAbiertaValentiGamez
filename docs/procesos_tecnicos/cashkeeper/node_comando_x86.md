# Cashkeeper CKEasy CMD

x86 Command to integrate @vg2357io/cashkeeper to cashkeeper device with CKEasy.

To integrate cashkeeper device to x86 application this cmd is not necessary. Only follow Install and x86 architecture on https://docs.valentigamez.com/#/procesos_tecnicos/integracion_cashkeeper_node

This is a library owned by Valentí Gàmez and the company CicloTIC S.L. If you want to use it, you must contact either of the two parts to obtain permission.

## Install

Follow https://docs.valentigamez.com/#/procesos_tecnicos/cashkeeper/node and Install x64

## Usage

```cmd
echo "{\"id\":1,\"method\":\"SetIP\",\"params\":{\"ip\":\"127.0.0.1\"}}" | npx cashkeeper-cmd
echo "{\"id\":2,\"method\":\"Start\"}" | npx cashkeeper-cmd
echo "{\"id\":3,\"method\":\"Status\"}" | npx cashkeeper-cmd

# Cobrar 1,45€ (si trabajas en céntimos => 145)
echo "{\"id\":4,\"method\":\"Pay\",\"params\":{\"total\":145}}" | npx cashkeeper-cmd

# Inventario
echo "{\"id\":5,\"method\":\"GetAmounts\"}" | npx cashkeeper-cmd

# Cierre de caja (ejemplo modo)
echo "{\"id\":6,\"method\":\"CashBoxControl\",\"params\":{\"mode\":7}}" | npx cashkeeper-cmd

echo "{\"id\":7,\"method\":\"Stop\"}" | npx cashkeeper-cmd
```

## Methods supported

Admin: Ping, Start, Stop, Status, SetIP

Transactions: Pay, PaySpecific, Change, AddChange

Cash / levels: GetAmounts, GetLevels, CashBoxControl, EmptyCashBox

Errors: ErrorManage

## Author

Valentí Gàmez @vg2357io

- https://valentigamez.com
- https://github.com/vg2357io
- https://x.com/vg2357io
- https://instagram.com/vg2357io
- https://youtube.com/vg2357io
