# Descripción del producto

## Introducción

Este documento describe, de forma clara y accionable, los dos pilares de EleuteriOS: Ariadna (identidad, acceso y orquestación de servicios) y Sindri (formato extendido de Markdown para construir sitios, documentos y apps a partir de plantillas). El objetivo es alinear a negocio, producto y tecnología para ejecutar un MVP en el corto plazo y escalar hacia una versión estable.

## Componentes principales

- Ariadna
  - Inicio de sesión unificado (OIDC/OAuth2) y gestión de cuentas/roles.
  - Red privada como perímetro de seguridad y control de dispositivos.
  - Conectores con terceros (SaaS/infra) con políticas de mínimos privilegios.
- Sindri
  - Extensión de Markdown que genera web, PDF y DOC desde el mismo origen.
  - Plantillas de estilo y componentes reutilizables.
  - Integraciones con Ariadna para contenido privado y acciones autenticadas.

## Propuesta de valor

- Eficiencia operativa: una sola fuente de verdad para identidad y contenidos.
- Time‑to‑market: plantillas y conectores listos para usar.
- Seguridad por diseño: RBAC, perímetro privado y trazabilidad.
- Escalabilidad: arquitectura modular, versionada y automatizable (IaC/CI).

## Casos de uso tipo

- PyME que centraliza su intranet, catálogos y reservas con login único.
- Agencia/estudio que produce sitios y documentos estandarizados para clientes.
- Equipo docente que publica material didáctico y lo versiona con control de acceso.

## Límites del MVP

- Alcance centrado en login, red privada, 2–3 conectores con terceros y render básico de Sindri (web y PDF).
- Sin personalizaciones a medida fuera de las plantillas definidas.
  
Notas de exclusión: no se incluyen desarrollos a medida, integraciones no priorizadas ni funcionalidades fuera del roadmap.

## Métricas iniciales

- Tasa de adopción de login Ariadna.
- Tiempo de publicación con Sindri (de borrador a web/PDF).
- Incidencias de seguridad y tiempos de resolución.

## Roadmap (resumen)

- Fase 0: cimientos (identidad, plantillas base, CLI Sindri).
- Fase 1: conectores prioritarios y observabilidad.
- Fase 2: automatización avanzada y catálogo de módulos.
